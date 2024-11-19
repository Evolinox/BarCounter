<script setup lang="ts">
import { PinInput, PinInputGroup, PinInputInput } from '@/components/ui/pin-input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pin = ref<string[]>([]);

function addDigit(value: number) {
  pin.value.push(value.toString());
  if (isPinComplete()) {
    router.push('/home');
  }
}

function isPinComplete() {
  return Array.from(pin.value).filter(input => input !== '').length === 3;
}
</script>

<template>
  <div class="login-body">
    <Card>
      <CardContent class="p-6">
        <div class="pin-display">
          <PinInput
              id="pin-input"
              v-model="pin"
              placeholder="○"
              disabled
          >
            <PinInputGroup>
              <PinInputInput
                  class="pin-input-button"
                  v-for="(id, index) in 3"
                  :key="id"
                  :index="index"
              />
            </PinInputGroup>
          </PinInput>
        </div>
        <div class="button-grid pt-6">
          <Button @click="addDigit(1)">1</Button>
          <Button @click="addDigit(2)">2</Button>
          <Button @click="addDigit(3)">3</Button>
          <Button @click="addDigit(4)">4</Button>
          <Button @click="addDigit(5)">5</Button>
          <Button @click="addDigit(6)">6</Button>
          <Button @click="addDigit(7)">7</Button>
          <Button @click="addDigit(8)">8</Button>
          <Button @click="addDigit(9)">9</Button>
          <Button @click="addDigit(0)" style="grid-column: 2;">0</Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<style>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.pin-display {
  width: 190px;
}
.pin-input-button {
  width: 63.3px;
  height: 60px;
  font-size: 20px;
}
.button-grid {
  display: grid;
  grid-template-columns: repeat(3, 60px);
  gap: 5px;
  max-width: 190px;
  margin: 0 auto;
}
.button-grid Button {
  height: 60px;
  width: 60px;
  font-size: 20px;
}
</style>