import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
import Pocketbase from "pocketbase";
import { json, type RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const POST: RequestHandler = async ({ request }) => {
  const adminPb = new Pocketbase(PUBLIC_POCKETBASE_URL);
  await adminPb.admins.authWithPassword(env.PB_ADMIN_USER, env.PB_ADMIN_PASS);

  // 0. create chat

  const newChat = await adminPb.collection("chats").create({});

  // 1. create 2 messages
  const msg1 = await adminPb
    .collection("messages")
    .create({ content: "msg1", chat: newChat.id });
  const msg2 = await adminPb
    .collection("messages")
    .create({ content: "msg2", chat: newChat.id });

  // 2. Update chat
  const chatUpdated = await adminPb
    .collection("chats")
    .update(
      newChat.id,
      { "messages+": [msg1.id, msg2.id] },
      { expand: "messages" },
    );

  console.log(chatUpdated);

  return json(chatUpdated);
};
