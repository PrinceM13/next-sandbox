"use client";

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: "32px"
  },
  title: {
    fontSize: 48,
    marginBottom: 20,
    textAlign: "center",
    color: "grey"
  },
  sectionGeneralInfo: {
    color: "teal"
  },
  sectionA: {
    color: "salmon"
  },
  sectionB: {
    color: "pink"
  },
  sectionC: {
    color: "purple"
  }
});

export default function PDFTrialDocument({
  title = "PDF Trial Document",
  fName = "John",
  lName = "Doe",
  task = "Create PDF"
}: {
  title?: string;
  fName?: string;
  lName?: string;
  task?: string;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.sectionGeneralInfo}>
          <Text>GeneralInfo</Text>
        </View>
        <View style={styles.sectionA}>
          <Text>Section A</Text>
        </View>
        <View style={styles.sectionB}>
          <Text>Section B</Text>
        </View>
        <View style={styles.sectionC}>
          <Text>Section C</Text>
        </View>
      </Page>
    </Document>
  );
}
