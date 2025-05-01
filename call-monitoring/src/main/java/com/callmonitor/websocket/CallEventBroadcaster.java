package com.callmonitor.websocket;

import com.callmonitor.model.Call;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class CallEventBroadcaster {

    @Autowired
    private SimpMessagingTemplate template;

    public void broadcastCallUpdate(Call call) {
        template.convertAndSend("/topic/call-updates", call);
    }
}
