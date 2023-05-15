import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a href="#" class={styles.anchor}>
          <span>Gescorp</span>
          <span class={styles.spacer}>|</span>
          <span>2023</span>
        </a>
      </div>
    </footer>
  );
});
