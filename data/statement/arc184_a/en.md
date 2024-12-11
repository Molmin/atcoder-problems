Score : $600$ points

## Problem Statement

This problem is **interactive**, and the **judge is adaptive**. See the notes for details.<br>
**Also, the parameters in the problem statement are fixed at $N=1000$, $M=10$, $Q=950$.**

There are $N$ coins numbered $1, 2, \dots, N$.<br>
Exactly $M$ of these coins are counterfeit.

An appraiser can, in one appraisal, determine whether two coins are of the same type or different types. Specifically:

- If the two coins are both genuine or both counterfeit, they are judged to be of the same type.
- Otherwise, they are judged to be of different types.

Identify all the counterfeit coins using at most $Q$ appraisals.

## Constraints

- $\color{red}{N = 1000}$
- $\color{red}{M = 10}$
- $\color{red}{Q = 950}$

## Interaction

This is an interactive problem.<br>
Initially, receive $N$, $M$, and $Q$ from Standard Input:

```plain
$N$ $M$ $Q$
```

<br>

Next, you can perform appraisals between $0$ and $Q$ times, inclusive, as follows.

First, by outputting to Standard Output in the following format, you indicate that you are appraising coins $x$ and $y$. (Include a newline at the end.)

```plain
? $x$ $y$
```

Here, $x$ and $y$ must be distinct integers between $1$ and $N$, inclusive.

In response, the judge system will reply with one of the following three responses.

```plain
0
```

If the response is `0`, it means that coins $x$ and $y$ are of the same type.

```plain
1
```

If the response is `1`, it means that coins $x$ and $y$ are of different types.

```plain
-1
```

If the response is `-1`, it means that the appraisal is invalid. Specifically, this response is given when at least one of the following conditions is met:

- The outputted $x$ and $y$ does not satisfy the constraints.
- The number of appraisals exceeds $Q$.

If you receive this response, your program is considered incorrect. Terminate your program immediately.

<br>

Finally, by outputting to Standard Output in the following format, you answer that coins $A_1, A_2, \dots, A_{M}$ are counterfeit. (Include a newline at the end.)

```plain
! $A_1$ $A_2$ $\dots$ $A_{M}$
```

Here, $A_i$ must be distinct integers between $1$ and $N$, inclusive.<br>
After this output, terminate your program immediately.

If any of your outputs do not meet the specified format, your program will be considered incorrect.
The judge will then respond with `-1`, so in that case, terminate your program immediately.

## Notes

- <span style="color:red">**Every time you output, include a newline at the end and flush Standard Output.**</span> Failure to do so may result in a verdict of TLE or WA.
- After outputting your answer (or receiving `-1`), terminate your program immediately. Otherwise, the verdict is indeterminate.
- Beware that unnecessary newlines are considered as malformed.
- **The judge for this problem is adaptive.** That is, at any point, as long as consistency can be maintained, the judge may change which coins are counterfeit. See the sample interaction for details.

## Sample Interaction

In this interaction, $N=5$, $M=2$, $Q=10$, and the judge initially considers coins $1$ and $2$ to be counterfeit.

Note that this example does not meet the constraints and is not included in the judge.

Input　
Output
Explanation

`5 2 10`

$N$, $M$, and $Q$ are given.

`? 1 2`
You appraise coins $1$ and $2$.

`0`

Coins $1$ and $2$ are judged to be of the same type.

`? 1 3`
You appraise coins $1$ and $3$.

`1`

Coins $1$ and $3$ are judged to be of different types.

`? 1 4`
You appraise coins $1$ and $4$.

`1`

Coins $1$ and $4$ are judged to be of different types.

`! 1 2`
You answer that coins $1$ and $2$ are counterfeit.

Indeed, coins $1$ and $2$ are considered counterfeit, but it is also possible to consider coins $3$ and $4$ as counterfeit while maintaining consistency.Therefore, the judge may change the counterfeit coins to $3$ and $4$.As a result, the judge may judge this answer as incorrect.