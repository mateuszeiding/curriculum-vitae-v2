<template>
  <div class="d-flex flex-column gap-5">
    <div>
      <div class="fs-lg text-center uppercase fw-medium border-bottom pb-2">
        <div class="skeleton" />
      </div>
      <div v-for="n in 2" :key="n" class="pt-2 pb-3">
        <div class="d-flex justify-content-between">
          <div class="fs-sm uppercase fw-medium skeleton w-25" />
          <div class="d-flex column-gap-2 dot-skeleton">
            <span v-for="level in 3" :key="level" class="fs-lg lh-1">{{ '\u2022' }} </span>
          </div>
        </div>
        <div class="d-flex gap-3 ps-4 pt-2 flex-wrap">
          <div v-for="v in 4 / n" :key="v" class="fs-xs skeleton w-25"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.dot-skeleton {
  & > span {
    opacity: 0;
    animation: dots calc(var(--skeleton-animation-duration) / 2) infinite linear;
  }

  & > span:nth-child(3) {
    animation-name: dot-3;
  }

  & > span:nth-child(2) {
    animation-name: dot-2;
  }

  & > span:nth-child(1) {
    animation-name: dot-1;
  }
}

@keyframes dot-3 {
  0%,
  24.999% {
    opacity: 0;
  }
  25%,
  100% {
    opacity: 1;
  }
}

@keyframes dot-2 {
  0%,
  49.999% {
    opacity: 0;
  }
  50%,
  100% {
    opacity: 1;
  }
}

@keyframes dot-1 {
  0%,
  74.999% {
    opacity: 0;
  }
  75%,
  100% {
    opacity: 1;
  }
}
</style>
