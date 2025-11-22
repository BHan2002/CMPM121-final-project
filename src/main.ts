// src/main.ts
import { GLContext } from "./gl/GLContext.ts";
import { Engine } from "./core/Engine.ts";

function bootstrap() {
  const canvas = document.getElementById("game") as HTMLCanvasElement | null;
  if (!canvas) {
    throw new Error("Canvas element with id 'game' not found");
  }

  const glctx = new GLContext(canvas);

  const engine = new Engine((deltaTime: number) => {
    
    glctx.clear();

    //console.log(deltaTime); // log deltaTime for demonstration purposes
  });

  engine.start();
}

bootstrap();
