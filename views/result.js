document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sort-order');
  const buttons = form.querySelectorAll('input[name="order"]');
  buttons.forEach((button) => {
      button.addEventListener('change', (event) => {
          const order = event.target.value;
          const channelId = '{{channelId}}';
          const url = `/result?channelId=${channelId}&order=${order}`;
          form.setAttribute('action', url);
          form.submit();
      });
  });
});