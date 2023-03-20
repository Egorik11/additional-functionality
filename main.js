const header = document.querySelector('.lessons-list-timeline__header');
const textInfo = header.children[1];
const totalLessons = document.querySelector('.lessons-timeline').children;
const countLessonsDontCompleted = document.querySelectorAll(
  '.lessons-timeline__item-holder'
).length;
const lessonBadge = Array.from(
  document.querySelectorAll('.lesson-header-badge')
);

function getInfoAboutLessons() {
  const totalHomeWork = {
    completedHW: 0,
    notCompleted: 0,
  };

  lessonBadge.forEach((elem) => {
    if (elem.classList.contains('badge-success')) {
      totalHomeWork.completedHW += Number(elem.children[0].innerText);
    }
    if (elem.classList.contains('badge-alert')) {
      const total =
        Number(elem.children[2].innerText) - Number(elem.children[0].innerText);
      totalHomeWork.notCompleted += total;
    }
  });

  textInfo.innerHTML = `
    Всего занятий: ${totalLessons.length} <br />
    Осталось занятий: ${countLessonsDontCompleted} <br />
    Выполнено домашних заданий: ${totalHomeWork.completedHW} <br />
    Необходимо выполнить: ${totalHomeWork.notCompleted}
  `;
}
