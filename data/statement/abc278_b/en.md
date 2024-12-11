Score : $200$ points

## Problem Statement

Takahashi bought a table clock.<br>
The clock shows the time as shown in Figure 1 at $\mathrm{AB}$:$\mathrm{CD}$ in the $24$-hour system.<br>
For example, the clock in Figure 2 shows 7:58.

The format of the time is formally described as follows.<br>
Suppose that the current time is $m$ minutes past $h$ in the $24$-hour system.  Here, the $24$-hour system represents the hour by an integer between $0$ and $23$ (inclusive), and the minute by an integer between $0$ and $59$ (inclusive). <br>
Let $A$ be the tens digit of $h$, $B$ be the ones digit of $h$, $C$ be the tens digit of $m$, and $D$ be the ones digit of $m$.  (Here, if $h$ has only one digit, we consider that it has a leading zero; the same applies to $m$.)<br>
Then, the clock shows $A$ in its top-left, $B$ in its bottom-left, $C$ in its top-right, and $D$ in its bottom-right.

![image](https://img.atcoder.jp/ghi/abc278_fd0f03726830bf6d87eafff6aaedb0634b1aa7577b2dd043fc5b5a7870f4e12b.png)

Takahashi has decided to call a time **a confusing time** if it satisfies the following condition:

- after swapping the top-right and bottom-left digits on the clock, it still reads a valid time in the $24$-hour system.

For example, the clock in Figure 3 shows 20:13.  After swapping its top-right and bottom-left digits, it reads 21:03.  Thus, 20:13 is a confusing time.

The clock now shows $H$:$M$.<br>
Find the next confusing time (including now) in the $24$-hour system.

## Constraints

- $0 \leq H \leq 23$
- $0 \leq M \leq 59$
- $H$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $H$ $M$

## Output

Let $h$:$m$ be the answer, where $h$ and $m$ must satisfy $0 \leq h \leq 23$ and $0 \leq m \leq 59$.<br>
Print $h$ and $m$ in the following format:  

> $h$ $m$

Your answer is considered correct even if $h$ contains a leading zero to represent it as a $2$-digit integer; the same applies to $m$.

```input1
1 23
```

```output1
1 23
```

1:23 is a confusing time because, after swapping its top-right and bottom-left digits on the clock, it reads 2:13.<br>
Thus, the answer is 1:23.<br>
Your answer is considered correct even if you print `01 23` with a leading zero.

```input2
19 57
```

```output2
20 0
```

The next confusing time after 19:57 is 20:00.

```input3
20 40
```

```output3
21 0
```

Note that 24:00 is an invalid notation in the $24$-hour system.