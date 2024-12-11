Score : $700$ points

## Problem Statement

PCT has a permutation $(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$. You are only informed of $N$.

You can ask him at most $25000$ questions of the following form.

- Specify a triple of integers $(i,j,k)$ such that $1 \le i,j,k \le N$ and ask whether $P_i + P_j &gt; P_k$.

Find all of $P_1,P_2,\dots,P_N$.

## Constraints

- $1 \le N \le 2000$
- $P$ is decided before the start of the interaction of your program and the judge.

## Input and Output

**This is an interactive task**, where your program and the judge interact via input and output.

First, your program is given $N$, the length of the permutation, from Standard Input:

```plain
$N$
```

Then, you get to ask questions.
Print your question to Standard Output in the following format: (There should be a newline at the end.)

```plain
? $i$ $j$ $k$
```

If the question is valid, the answer $ans$ will be given from Standard Input:

```plain
$ans$
```

Here, $ans$ is `Yes` or `No`.

If the question is malformed or judged invalid because you have asked more questions than allowed, `-1` will be given from Standard Input:

```plain
-1
```

Here, the submission has already been judged incorrect. The judge will end the interaction at this point; preferably, your program should also quit.

Once you have identified all of $P_1, P_2, \dots, P_N$, print them to Standard Output in the following format: (There should be a newline at the end.)

```plain
! $P_1$ $P_2$ $\dots$ $P_N$
```

## Judging

- <span style="color:red">**Each time you print something, end it with a newline and flush Standard Output. Otherwise, you might get a TLE verdict.**</span>
- After printing the answer (or receiving `-1`), immediately terminate the program normally. Otherwise, the verdict will be indeterminate.
- Note that unnecessary newlines will be considered as malformed output.

## Sample Interaction

Below is an interaction with $N = 4$ and $P=(3,1,2,4)$.

Input
Output
Description

`4`

$N$ is given.

`?` `1` `2` `3`
As the first question, you ask whether $P_1 + P_2 > P_3$.

`Yes`

We have $P_1 + P_2=4$ and $P_3=2$, so the answer is `Yes`.

`?` `2` `3` `3`
As the second question, you ask whether $P_2 + P_3 > P_3$.

`Yes`

We have $P_2 + P_3=3$ and $P_3=2$, so the answer is `Yes`.

`?` `2` `3` `4`
As the third question, you ask whether $P_2 + P_3 > P_4$.

`No`

We have $P_2 + P_3=3$ and $P_4=4$, so the answer is `No`.

`!` `3` `1` `2` `4`
You print $P_1,P_2,P_3,P_4$. We do have $P=(3,1,2,4)$, so you get an AC.