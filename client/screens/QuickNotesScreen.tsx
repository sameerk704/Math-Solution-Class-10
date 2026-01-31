import React, { memo, useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ScreenWrapper } from "@/components/ScreenWrapper";
import { ThemedText } from "@/components/ThemedText";
import { EmptyState } from "@/components/EmptyState";
import { JiguuColors, Spacing, BorderRadius, Typography } from "@/constants/theme";

interface Note {
  id: string;
  text: string;
  color: string;
  createdAt: number;
}

const NOTE_COLORS = [
  "#FFE082",
  "#FFAB91",
  "#CE93D8",
  "#90CAF9",
  "#A5D6A7",
  "#F48FB1",
  "#80DEEA",
  "#FFCC80",
];

const STORAGE_KEY = "@jiguu_quick_notes";

const NoteCard = memo(function NoteCard({
  note,
  onEdit,
  onDelete,
}: {
  note: Note;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <View style={[styles.noteCard, { backgroundColor: note.color }]}>
      <View style={styles.colorStrip} />
      <ThemedText style={styles.noteText} numberOfLines={2}>{note.text}</ThemedText>
      <View style={styles.noteActions}>
        <Pressable
          testID={`edit-note-${note.id}`}
          style={styles.actionButton}
          onPress={onEdit}
        >
          <Feather name="edit-2" size={14} color="#333" />
        </Pressable>
        <Pressable
          testID={`delete-note-${note.id}`}
          style={styles.actionButton}
          onPress={onDelete}
        >
          <Feather name="trash-2" size={14} color="#333" />
        </Pressable>
      </View>
    </View>
  );
});

const ColorPicker = memo(function ColorPicker({
  selectedColor,
  onSelectColor,
}: {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}) {
  return (
    <View style={styles.colorPicker}>
      {NOTE_COLORS.map((color) => (
        <Pressable
          key={color}
          style={[
            styles.colorOption,
            { backgroundColor: color },
            selectedColor === color && styles.colorSelected,
          ]}
          onPress={() => onSelectColor(color)}
        />
      ))}
    </View>
  );
});

function QuickNotesScreen() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [noteText, setNoteText] = useState("");
  const [noteColor, setNoteColor] = useState(NOTE_COLORS[0]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setNotes(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load notes:", error);
    }
  };

  const saveNotes = async (newNotes: Note[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
      setNotes(newNotes);
    } catch (error) {
      console.error("Failed to save notes:", error);
    }
  };

  const handleAddNote = useCallback(() => {
    setEditingNote(null);
    setNoteText("");
    setNoteColor(NOTE_COLORS[0]);
    setModalVisible(true);
  }, []);

  const handleEditNote = useCallback((note: Note) => {
    setEditingNote(note);
    setNoteText(note.text);
    setNoteColor(note.color);
    setModalVisible(true);
  }, []);

  const handleDeleteNote = useCallback(
    (noteId: string) => {
      Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            const newNotes = notes.filter((n) => n.id !== noteId);
            saveNotes(newNotes);
          },
        },
      ]);
    },
    [notes]
  );

  const handleSaveNote = useCallback(() => {
    if (!noteText.trim()) {
      Alert.alert("Empty Note", "Please enter some text for your note.");
      return;
    }

    if (editingNote) {
      const newNotes = notes.map((n) =>
        n.id === editingNote.id ? { ...n, text: noteText.trim(), color: noteColor } : n
      );
      saveNotes(newNotes);
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        text: noteText.trim(),
        color: noteColor,
        createdAt: Date.now(),
      };
      saveNotes([newNote, ...notes]);
    }

    setModalVisible(false);
    setNoteText("");
    setEditingNote(null);
  }, [noteText, noteColor, editingNote, notes]);

  const renderItem = useCallback(
    ({ item }: { item: Note }) => (
      <NoteCard
        note={item}
        onEdit={() => handleEditNote(item)}
        onDelete={() => handleDeleteNote(item.id)}
      />
    ),
    [handleEditNote, handleDeleteNote]
  );

  const renderHeader = useCallback(
    () => (
      <View style={styles.header}>
        <ThemedText style={styles.title}>Quick Notes</ThemedText>
        <ThemedText style={styles.subtitle}>
          Your personal study notes
        </ThemedText>
      </View>
    ),
    []
  );

  const renderEmptyState = useCallback(
    () => (
      <EmptyState
        title="No Notes Yet"
        message="Tap the + button to create your first note!"
      />
    ),
    []
  );

  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

  return (
    <ScreenWrapper showBackButton>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          notes.length === 0 && styles.emptyContent,
        ]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
        ItemSeparatorComponent={renderSeparator}
      />

      <Pressable
        testID="add-note-button"
        style={[styles.fab, { bottom: 120 + insets.bottom }]}
        onPress={handleAddNote}
      >
        <Feather name="plus" size={24} color="#FFFFFF" />
      </Pressable>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <ThemedText style={styles.modalTitle}>
                {editingNote ? "Edit Note" : "New Note"}
              </ThemedText>
              <Pressable onPress={() => setModalVisible(false)}>
                <Feather name="x" size={24} color={JiguuColors.textPrimary} />
              </Pressable>
            </View>

            <TextInput
              testID="note-input"
              style={[styles.noteInput, { backgroundColor: noteColor }]}
              placeholder="Write your note here..."
              placeholderTextColor="rgba(0,0,0,0.4)"
              value={noteText}
              onChangeText={setNoteText}
              multiline
              autoFocus
            />

            <ThemedText style={styles.colorLabel}>Choose Color:</ThemedText>
            <ColorPicker
              selectedColor={noteColor}
              onSelectColor={setNoteColor}
            />

            <View style={styles.modalActions}>
              <Pressable
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <ThemedText style={styles.cancelButtonText}>Cancel</ThemedText>
              </Pressable>
              <Pressable
                testID="save-note-button"
                style={styles.saveButton}
                onPress={handleSaveNote}
              >
                <ThemedText style={styles.saveButtonText}>
                  {editingNote ? "Update" : "Save"}
                </ThemedText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
}

export default memo(QuickNotesScreen);

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
    paddingBottom: 160,
  },
  emptyContent: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    marginBottom: Spacing.xl,
    alignItems: "center",
  },
  title: {
    ...Typography.h2,
    color: "#26A69A",
  },
  subtitle: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    marginTop: Spacing.xs,
  },
  separator: {
    height: Spacing.md,
  },
  noteCard: {
    width: "100%",
    height: 56,
    borderRadius: BorderRadius.sm,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  colorStrip: {
    width: 4,
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.15)",
    borderRadius: 2,
    marginRight: Spacing.md,
  },
  noteText: {
    ...Typography.body,
    color: "#333333",
    flex: 1,
  },
  noteActions: {
    flexDirection: "row",
    gap: Spacing.xs,
  },
  actionButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    right: Spacing.xl,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#26A69A",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: JiguuColors.surface,
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
    padding: Spacing.xl,
    paddingBottom: Spacing["3xl"],
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.lg,
  },
  modalTitle: {
    ...Typography.h3,
    color: JiguuColors.textPrimary,
  },
  noteInput: {
    minHeight: 120,
    borderRadius: BorderRadius.sm,
    padding: Spacing.md,
    ...Typography.body,
    color: "#333333",
    textAlignVertical: "top",
  },
  colorLabel: {
    ...Typography.body,
    color: JiguuColors.textSecondary,
    marginTop: Spacing.lg,
    marginBottom: Spacing.sm,
  },
  colorPicker: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.sm,
  },
  colorOption: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  colorSelected: {
    borderWidth: 3,
    borderColor: JiguuColors.textPrimary,
  },
  modalActions: {
    flexDirection: "row",
    gap: Spacing.md,
    marginTop: Spacing.xl,
  },
  cancelButton: {
    flex: 1,
    height: 48,
    borderRadius: BorderRadius.sm,
    backgroundColor: JiguuColors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    ...Typography.button,
    color: JiguuColors.textSecondary,
  },
  saveButton: {
    flex: 1,
    height: 48,
    borderRadius: BorderRadius.sm,
    backgroundColor: "#26A69A",
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    ...Typography.button,
    color: "#FFFFFF",
  },
});
