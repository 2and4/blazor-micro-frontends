<script lang="ts">
import "./blazor-component.css";
import { BlazorComponentSetup } from "./blazor-component-setup";
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
  
export default defineComponent({
    name: 'BlazorComponent',
    setup() {
      const count = ref(0);
      const isInitialized = ref(false);
      const blazorComponentSetupRef = ref(new BlazorComponentSetup());
      
      const initialize = async () => {
        const blazorComponentSetup = blazorComponentSetupRef.value;
        isInitialized.value = await blazorComponentSetup.initializeAsync();
      };

      const sendMessage = () => {
        const blazorComponentSetup = blazorComponentSetupRef.value;
        blazorComponentSetup.sendMessage();
      }
      
      const incrementCount = () => {
        count.value += 1;
      };

      onMounted(() => {    
        initialize();
      });
      
      onUnmounted(() => {
        isInitialized.value = false;
      });
  
      return {
        count,
        isInitialized,
        sendMessage,
        incrementCount,
      };
    },
});
</script>
<template>
    <div class="flex-column-center">
      <div class="card-blazor" v-if="isInitialized">
        <blazor-custom-element-scoped element-title="Blazor Micro Frontend (Scoped)"></blazor-custom-element-scoped>
        <blazor-custom-element element-title="Blazor Micro Frontend (Unscoped)"></blazor-custom-element>
      </div>
      <div id="blazor-message">No message from blazor received.</div>
      <div class="card">
        <div>
          <button @click="sendMessage">Send message to blazor</button>
          <button @click="incrementCount">Count is {{ count }}</button>
        </div>
      </div>
    </div>
</template>