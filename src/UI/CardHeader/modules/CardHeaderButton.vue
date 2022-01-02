<template>
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="`${
      reverse ? 'button-arrow button-arrow-reversed' : 'button-arrow'
    }`"
  >
    <circle cx="20" cy="20" r="19.5" stroke="#D09A62" />
    <g clip-path="url(#clip0_14_1141)">
      <path
        d="M14.8806 20.3987L24.3153 29.8334C24.5374 30.0555 24.8937 30.0555 25.1158 29.8334C25.3379 29.6113 25.3379 29.255 25.1158 29.0328L16.0835 20.0005L25.1158 10.9682C25.3379 10.7461 25.3379 10.3898 25.1158 10.1677C25.0068 10.0587 24.8601 10 24.7176 10C24.5751 10 24.4284 10.0545 24.3195 10.1677L14.8848 19.6023C14.6626 19.8203 14.6626 20.1808 14.8806 20.3987Z"
        fill="#DCA367"
      />
    </g>
    <defs>
      <clipPath id="clip0_14_1141">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(30 30) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "app-card-arrow",
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button-arrow {
  cursor: pointer;

  &:hover {
    fill: #d09a62;

    & path {
      fill: #fff;
    }
  }

  &-reversed {
    transform: rotate(180deg);
  }
}
</style>
