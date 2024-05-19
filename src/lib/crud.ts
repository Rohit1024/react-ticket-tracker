import * as z from "zod";

export const statuses = [
  "IPGS",
  "Assigned",
  "Awaiting Assignment",
  "WOCR",
  "Closed",
  "IPCR",
  "Solution Offered",
  "Transferred",
] as const;
export const shards = [
  "Platform",
  "Infra",
  "Network",
  "Data",
  "Workspace",
] as const;
export const coverbugs = [
  "OOS",
  "Googler",
  "Low-quality",
  "No-action-necessary",
  "Duplicate",
] as const;

export const ticketSchema = z.object({
  id: z.string().optional(),
  case_id: z.string({
    required_error: "Case id is required",
  }),
  ldap: z.string({
    required_error: "Ldap is Required",
  }),
  createdAt: z.date({
    required_error: "Creation Date is Required",
  }),
  assignedAt: z.date({
    required_error: "Assigned Date is Required",
  }),
  closedAt: z.date().optional(),
  status: z.enum(statuses),
  shard: z.enum(shards),
  coverbug: z.enum(coverbugs).optional(),
  stack_id: z.string(),
  comments: z.string({
    required_error: "Commnets are Required",
  }),
});

export type createTicketSchemaType = z.infer<typeof ticketSchema>;

export const getTicketSchema = z.object({
  id: z.string(),
  case_id: z.string(),
  ldap: z.string(),
  createdAt: z.date(),
  assignedAt: z.date(),
  closedAt: z.date(),
  status: z.string(),
  shard: z.string(),
  coverbug: z.string().optional(),
  stack_id: z.string(),
  comments: z.string(),
});

export type TicketSchemaType = z.infer<typeof getTicketSchema>;
