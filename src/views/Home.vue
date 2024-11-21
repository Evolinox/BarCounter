<script setup lang="ts">
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, CupSoda, GlassWater, Beer } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

function addDrink() {
  //wip
}

function logOut() {
  router.push('/');
}
</script>

<template>
  <div class="main-body">
    <Card>
      <CardHeader class="p-6">
        <div class="button-grid">
          <Button @click="addDrink()">
            <CupSoda class="drink-icon" />
          </Button>
          <Button @click="addDrink()">
            <GlassWater class="drink-icon" />
          </Button>
          <Button @click="addDrink()">
            <Beer class="drink-icon" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  </div>
  <Button class="logout-button" @click="logOut()" variant="destructive" size="icon">
    <LogOut class="logout-icon" />
  </Button>
</template>

<style scoped>
.main-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.button-grid Button {
  height: 120px;
  width: 120px;
}

.logout-button {
  position: fixed;
  width: 64px;
  height: 64px;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}

.logout-icon {
  width: 32px;
  height: 32px;
}

.drink-icon {
  width: 64px;
  height: 64px;
}
</style>