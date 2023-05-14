import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>
      <div class="text-center">
          <span class="text-9xl">Hola</span>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
