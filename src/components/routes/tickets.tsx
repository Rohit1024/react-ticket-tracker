import { DataTable } from "@/data-table/data-table";
import { columns } from "@/data-table/tickets-columns";
import { TicketSchemaType } from "@/lib/crud";
import { collection, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

export function Tickets() {
  const firestore = useFirestore();
  const ticketsCollection = collection(firestore, "tickets");
  const ticketsQuery = query(ticketsCollection);

  const firestoreData = useFirestoreCollectionData(ticketsQuery, {
    idField: "id",
  });

  if (firestoreData.status === "loading") {
    return <span>loading...</span>;
  }

  if (!firestoreData.data.length) return <span>No Tickets</span>;

  const tickets = firestoreData.data as TicketSchemaType[];

  return <DataTable data={tickets} columns={columns} />;
}
