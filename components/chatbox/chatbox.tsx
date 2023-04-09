import React, { useEffect } from 'react';

interface ChatBoxProps {
  widgetId: string;
  pageId: string;
}

const ChatBox = ({ widgetId, pageId }: ChatBoxProps) => {
  useEffect(() => {
    const tawk = document.createElement("script");
    tawk.id = 'tawk.to';
    tawk.async = true;
    tawk.src = 'https://embed.tawk.to/' + `${pageId}/` + widgetId ;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode?.insertBefore(tawk, s);
  }, [widgetId, pageId]);

  return (
    <div></div>
  );
};

export default ChatBox;
