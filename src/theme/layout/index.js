// src/theme/Layout/index.js
import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import ChatBot from '@site/src/components/ChatBot';
import ConnectyCubeChatWidget from "@connectycube/chat-widget/react19";

export default function LayoutWrapper(props) {
  return (
    <>
      {/* Original Docusaurus layout */}
      <OriginalLayout {...props} />

      {/* Your custom ChatBot initialization */}
      <ChatBot />

      {/* ConnectyCube chat widget */}
      <ConnectyCubeChatWidget
        appId="10058"
        authKey="20C12AE6-319B-4A66-99F5-B01AB2FAAB89"
        userId="45"
        userName="Samuel"
        showOnlineUsersTab={false}
        splitView={true}
      />
    </>
  );
}
