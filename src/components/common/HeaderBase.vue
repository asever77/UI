// eslint-disable-next-line vue/multi-word-component-names
<script setup>
 
</script>

<template>
  <header class="base-header">
    <div class="base-header--wrap">
      <guide></guide>
      <strong class="base-header--logo">UI - base</strong>

      <div class="base-header--group">
        <button type="button" aria-label="전체메뉴">전체메뉴</button>
        <nav>
          <ul>
            <li>Content <br>Component
              <ul>
                <li>
                  <router-link :to="{ name: 'accordion-view' }">Accordion</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'tab-view' }">Tab</router-link>
                </li>
              </ul>
            </li>
            <li>Event <br>Component
              <ul>
                <li>
                  <router-link :to="{ name: 'scroll-view' }">Scroll</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'toggle-view' }">Toggle</router-link>
                </li>
              </ul>
            </li>
            <li>Form <br>Component
              <ul>
                <li>
                  <router-link :to="{ name: 'datepicker-view' }">Datepicker</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'file-view' }">File</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'input-view' }">Input</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'selection-view' }">Selection</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'select-view' }">Select</router-link>
                </li>
              </ul>
            </li>
            <li>Layer <br>Component
              <ul>
                <li>
                  <router-link :to="{ name: 'modal-view' }">Modal</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'system-view' }">System</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'toast-view' }">Toast</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'tooltip-view' }">Tooltip</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scope>
.base-header {
  &--wrap {
    position: relative;
    display: flex;
    width: 100%;
    padding: 0 2.4rem;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
  }
}
nav{display: none;}
</style>