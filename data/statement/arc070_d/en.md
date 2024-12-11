Score : $1300$ points

## Problem Statement

<font color="red">**This is an interactive task.**</font>

AtCoDeer the deer came across $N$ people. For convenience, the people are numbered $0$ through $N-1$.
Among them, $A$ are *honest* and the remaining $B(=N-A)$ are *unkind*.
All of these $N$ people know who are honest and who are unkind, but AtCoDeer only knows that there are $A$ honest and $B$ unkind people.
He is trying to identify all of the honest people by asking questions to these $N$ people.
For one question, AtCoDeer selects $a$ and $b$ $(0 \leq a,b \leq N-1)$, and asks person $a$ the following question: "Is person $b$ honest?"

An honest person will always answer correctly by "Yes" or "No".
An unkind person, however, will answer by selecting "Yes" or "No" **arbitrarily**.
That is, the algorithm used by an unkind person may not be simple one such as always lying or giving random fifty-fifty answers.

AtCoDeer can ask at most $2N$ questions. He will ask questions one by one, and the responses to the previous questions can be used when deciding the next question to ask.

Identify all of the honest people.
If it is impossible (more formally, if, for any strategy of asking $2N$ questions, there exists a strategy for unkind people to answer the questions so that there are two or more possible sets of the honest people), report that fact.

## Constraints

- $1 \leq A,B \leq 2000$

## Input and Output

First, $A$ and $B$ are given from Standard Input in the following format:

```plain
$A$ $B$
```

If identifying the honest people is impossible, the program must immediately print the following output and terminate itself:

```plain
Impossible
```

Otherwise, the program shall ask questions.
Each question must be written to Standard Output in the following format:

```plain
? $a$ $b$
```

Here, $a$ and $b$ must be integers between $0$ and $N-1$ (inclusive).
The response to the question will be given from Standard Input in the following format:

```plain
$ans$
```

Here, $ans$ is either `Y` or `N`.
`Y` represents "Yes"; `N` represents "No".

Finally, the answer must be written to Standard Output in the following format:

```plain
! $s_0s_1...s_{N-1}$
```

Here, $s_i$ must be `1` if person $i$ is honest, and `0` if person $i$ is unkind.

## Judgement

- <font color="red">**After each output, you must flush Standard Output.**</font> Otherwise you may get `TLE`.
- After you print the answer, the program must be terminated immediately. Otherwise, the behavior of the judge is undefined.
- When your output is invalid or incorrect, the behavior of the judge is undefined (it does not necessarily give `WA`).

## Samples

In the following sample, $A = 2$, $B = 1$, and the answer is `101`.

Input
Output

$2$ $1$

$?$ $0$ $1$

$N$

$?$ $0$ $2$

$Y$

$?$ $1$ $0$

$Y$

$?$ $2$ $0$

$Y$

$?$ $2$ $2$

$Y$

$!$ $101$

In the following sample, $A = 1$, $B = 2$, and the answer is `Impossible`.

Input
Output

$1$ $2$

$Impossible$