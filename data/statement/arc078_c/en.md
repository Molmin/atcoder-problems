Score : $800$ points

## Problem Statement

<font color="red">**This is an interactive task.**</font>

Snuke has a favorite positive integer, $N$. You can ask him the following type of question at most $64$ times: "Is $n$ your favorite integer?" Identify $N$.

Snuke is twisted, and when asked "Is $n$ your favorite integer?", he answers "Yes" if one of the two conditions below is satisfied, and answers "No" otherwise:

- Both $n \leq N$ and $str(n) \leq str(N)$ hold.
- Both $n &gt; N$ and $str(n) &gt; str(N)$ hold.

Here, $str(x)$ is the decimal representation of $x$ (without leading zeros) as a string. For example, $str(123) =$ `123` and $str(2000)$ = `2000`.
Strings are compared lexicographically. For example, `11111` $&lt;$ `123` and `123456789` $&lt;$ `9`.

## Constraints

- $1 \leq N \leq 10^{9}$

## Input and Output

Write your question to Standard Output in the following format:

```plain
? $n$
```

Here, $n$ must be an integer between $1$ and $10^{18}$ (inclusive).

Then, the response to the question shall be given from Standard Input in the following format:

```plain
$ans$
```

Here, $ans$ is either `Y` or `N`. `Y` represents "Yes"; `N` represents "No".

Finally, write your answer in the following format:

```plain
! $n$
```

Here, $n=N$ must hold.

## Judging

- <font color="red">**After each output, you must flush Standard Output.**</font> Otherwise you may get `TLE`.
- After you print the answer, the program must be terminated immediately. Otherwise, the behavior of the judge is undefined.
- When your output is invalid or incorrect, the behavior of the judge is undefined (it does not necessarily give `WA`).

## Sample

Below is a sample communication for the case $N=123$:

Input
Output

`? 1`

`Y`

`? 32`

`N`

`? 1010`

`N`

`? 999`

`Y`

`! 123`

- Since $1 \leq 123$ and $str(1) \leq str(123)$, the first response is "Yes".
- Since $32 \leq 123$ but $str(32) &gt; str(123)$, the second response is "No".
- Since $1010 &gt; 123$ but $str(1010) \leq str(123)$, the third response is "No".
- Since $999 \geq 123$ and $str(999) &gt; str(123)$, the fourth response is "Yes".
- The program successfully identifies $N=123$ in four questions, and thus passes the case.