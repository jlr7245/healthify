var dashTour = {
  id: 'healthify-dash',
  steps: [
    { 
      title: 'Welcome to Healthify!',
      content: `This is your dashboard, where you'll be able to track your meals and pantry items.`,
      target: 'welcome',
      placement: 'right'
    },
    {
      title: `Adding a meal`,
      content: `Adding a meal is very simple. Just type in what you ate and the meal with nutritional info will be added to your dashboard.`,
      target: 'addmealbutton',
      placement: 'bottom'
    },
    {
      title: `Viewing your pantry`,
      content: `Adding food to your pantry allows you to keep track of what you've bought.`,
      target: 'pantrytab',
      placement: 'top'
    },
    {
      title: `Archiving & Deleting`,
      content: `Once you've eaten a food in your pantry, archive it - unless you want to remove all trace of it, in which case the delete button is your friend.`,
      target: 'pantrycontainer',
      placement: 'right'
    },
    {
      title: `Weekly Meals`,
      content: `Keep track of what you've eaten each calendar week by looking at the 'Weekly Meals' tab.`,
      target: 'mealstab',
      placement: 'bottom'
    },
    {
      title: 'Nutrition at a Glance',
      content: `Here you'll be able to keep track of your daily and weekly nutrition. Note: foods in your pantry don't count towards your nutrition - only meals.`,
      target: 'nutritionfacts',
      placement: 'bottom'
    },
    {
      title: 'Archive',
      content: `Once you click the "Archive" button on a food in your pantry, it will appear here so you can keep a record of what you've bought in the past.`,
      target: 'archive',
      placement: 'top'
    },
    {
      title: 'Get healthified!',
      content: `We hope you enjoy using Healthify!`,
      target: 'welcome',
      placement: 'right'
    }
  ],
  onEnd: endingTour
};

hopscotch.startTour(dashTour);

function endingTour() {
  axios.patch(`/user/${id}`, {isNew: 'no'})
    .then((res) => console.log(res));
}