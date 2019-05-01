package umm3601;

import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

import java.io.IOException;
import java.nio.ByteBuffer;

@WebSocket
public class WebSocketHandler {

  @OnWebSocketMessage
  public void handleTextMessage(Session session, String message) throws IOException {
    System.out.println("New Text Message Received");
    session.getRemote().sendString(message);
  }

}
