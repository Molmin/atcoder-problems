Score : $200$ points

## Problem Statement

There were $N$ contestants in the qualification round of a programming contest.  All contestants got distinct ranks. <br>
You are given a length-$N$ string $S$, which represents whether the contestants want to participate in the final round or not.  Specifically,

- if the $i$-th character of $S$ is `o`, the contestant ranked $i$-th in the qualification wants to participate in the final;
- if the $i$-th character of $S$ is `x`, the contestant ranked $i$-th in the qualification does not want to participate in the final.

Among those who want to participate in the final, $K$ contestants with the smallest ranks advance to the final.

Print a string $T$ of length $N$ that satisfies the following conditions:

- if the contestant ranked $i$-th in the qualification advances to the final, the $i$-th character of $T$ is `o`;
- if the contestant ranked $i$-th in the qualification does not advance to the final, the $i$-th character of $T$ is `x`.

## Constraints

- $N$ and $K$ are integers.
- $1 \le K \le N \le 100$
- $S$ is a string of length $N$ consisting of `o` and `x`.
- $S$ has at least $K$ `o`'s.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $S$

## Output

Print the answer.

```input1
10 3
oxxoxooxox
```

```output1
oxxoxoxxxx
```

In this input, $N=10$ people took part in the qualification round, and $K=3$ of them advance to the final.

- The participant who ranked $1$-st in the qualification wants to participate in the final, so the participant advances to the final.  $1$ participant has advanced so far.
- The participants who ranked $2$-nd and $3$-rd in the qualification do not want to participate in the final, so the participants do not advance to the final.
- The participant who ranked $4$-th in the qualification wants to participate in the final, so the participant advances to the final.  $2$ participants have advanced so far.
- The participants who ranked $5$-th in the qualification does not want to participate in the final, so the participant does not advance to the final.
- The participant who ranked $6$-th in the qualification wants to participate in the final, so the participant advances to the final.  $3$ participants have advanced so far.
- Now that $3$ people have advanced to the final, no participants ranked $7$-th or lower advance to the final.