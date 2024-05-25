// No arquivo EventBus.d.ts

// Declaração do módulo
declare namespace EventBusModule {
  // Declaração da interface
  interface EventBus {
    isAuthenticated: boolean;
    // Outras propriedades e métodos, se houver
  }
}

// Exportar o módulo como namespace
export as namespace EventBusModule;

// Exportar uma instância do EventBus
declare const eventBus: EventBusModule.EventBus;
export default eventBus;
