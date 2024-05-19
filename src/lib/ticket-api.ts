import { firestore } from "@/firebase/config";
import {
  TicketSchemaType,
  createTicketSchemaType,
  getTicketSchema,
} from "./crud";
import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";

export const ticketConverter: FirestoreDataConverter<TicketSchemaType> = {
  toFirestore: (ticket: TicketSchemaType) => ticket,
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    return getTicketSchema.parse(snapshot.data());
  },
};

const getTicketCollection = collection(firestore, "tickets").withConverter(
  ticketConverter
);
const ticketsQuery = query(getTicketCollection, orderBy("updatedAt", "desc"));

export async function createCase(input: createTicketSchemaType) {
  const ticketCollection = collection(firestore, "tickets");
  try {
    const document = await addDoc(ticketCollection, input);
    return document.id;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTicket(input: createTicketSchemaType) {
  try {
    const docRef = doc(firestore, "tickets", input.id!);
    return await setDoc(docRef, input, {
      merge: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTicket(id: string) {
  try {
    const docRef = doc(firestore, "tickets", id);
    return deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
}
