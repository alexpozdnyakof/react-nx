import { call, delay, spawn, fork, cancel } from 'redux-saga/effects';

function* taskOne() {
  console.log('taskOne starting...');
  yield delay(7000);
  console.log('taskOne completed');
}

function* taskTwo() {
  console.log('taskTwo start  ing...');

  yield delay(5000);
  throw new Error('task two error');
  console.log('taskTwo completed');
}

function* taskThree() {
  console.log('taskThree starting...');
  yield delay(3000);
  console.log('taskThree completed');
}

function* runTasks(): unknown {
  try {
    yield fork(taskOne);
    yield spawn(taskTwo);
    yield fork(taskThree);
  } catch (e) {
    console.log('watch level');
    console.log({ e });
  }
}

export default function* parallelTasksSaga() {
  console.log('%cstarting tasks...', 'color: #16b141');
  yield call(runTasks);
  console.log('%call tasks completed', 'color: #16b141');
}
