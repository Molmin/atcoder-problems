Score : $100$ points

## Problem Statement

One day, Takahashi got up at exactly $B$ minutes past $A$ o'clock (in $24$-hour clock), and Aoki got up at exactly $D$ minutes and $1$ second past $C$ o'clock.<br>
If Takahashi got up earlier than Aoki, print `Takahashi`; otherwise, print `Aoki`.

## Constraints

- $0 \leq A \leq 23$
- $0 \leq B \leq 59$
- $0 \leq C \leq 23$
- $0 \leq D \leq 59$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

If Takahashi got up earlier than Aoki, print `Takahashi`; otherwise, print `Aoki`.

```input1
7 0 6 30
```

```output1
Aoki
```

Takahashi got up at $7$ sharp, and Aoki got up at $30$ minutes and $1$ second past $6$ o'clock.
Aoki was the first to get up, so `Aoki` should be printed.

```input2
7 30 7 30
```

```output2
Takahashi
```

Takahashi got up at exactly half past $7$, and Aoki got up at $30$ minutes and $1$ second past $7$ o'clock.
Just by one second, Takahashi was the first to get up, so `Takahashi` should be printed.

```input3
0 0 23 59
```

```output3
Takahashi
```

$0:00$ in a day is one minute before $0:01$, not one minute past $23:59$ ("$24:00$").
Thus, Takahashi was the first to get up, so `Takahashi` should be printed.