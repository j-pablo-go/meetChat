import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  // Aquí puedes definir endpoints de API si los necesitas en el futuro
  
  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * El manejador de solicitudes utilizado por Angular CLI y Netlify.
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);