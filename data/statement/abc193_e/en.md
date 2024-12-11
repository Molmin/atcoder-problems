Score : $500$ points

## Problem Statement

A train goes back and forth between Town $A$ and Town $B$.
It departs Town $A$ at time $0$ and then repeats the following:

- goes to Town $B$, taking $X$ seconds;
- stops at Town $B$ for $Y$ seconds;
- goes to Town $A$, taking $X$ seconds;
- stops at Town $A$ for $Y$ seconds.

More formally, these intervals of time are half-open, that is, for each $n = 0, 1, 2, \dots$:

- at time $t$ such that $(2X + 2Y)n \leq t &lt; (2X + 2Y)n + X$, the train is going to Town $B$;
- at time $t$ such that $(2X + 2Y)n + X \leq t &lt; (2X + 2Y)n + X + Y$, the train is stopping at Town $B$;
- at time $t$ such that $(2X + 2Y)n + X + Y \leq t &lt; (2X + 2Y)n + 2X + Y$, the train is going to Town $A$;
- at time $t$ such that $(2X + 2Y)n + 2X + Y \leq t &lt; (2X + 2Y)(n + 1)$, the train is stopping at Town $A$.

Takahashi is thinking of taking this train to depart Town $A$ at time $0$ and getting off at Town $B$.
After the departure, he will repeat the following:

- be asleep for $P$ seconds;
- be awake for $Q$ seconds.

Again, these intervals of time are half-open, that is, for each $n = 0, 1, 2, \dots$:

- at time $t$ such that $(P + Q)n \leq t &lt; (P + Q)n + P$, Takahashi is asleep;
- at time $t$ such that $(P + Q)n + P \leq t &lt; (P + Q)(n + 1)$, Takahashi is awake.

He can get off the train at Town $B$ if it is stopping at Town $B$ and he is awake.<br>
Determine whether he can get off at Town $B$. If he can, find the earliest possible time to do so.<br>
Under the constraints of this problem, it can be proved that the earliest time is an integer.

You are given $T$ cases. Solve each of them.

## Constraints

- All values in input are integers.
- $1 \leq T \leq 10$
- $1 \leq X \leq 10^9$
- $1 \leq Y \leq 500$
- $1 \leq P \leq 10^9$
- $1 \leq Q \leq 500$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\rm case_1$
> 
> $\rm case_2$
> 
> $\hspace{9pt}\vdots$
> 
> $\rm case_T$

Each case is in the following format:

> $X$ $Y$ $P$ $Q$

## Output

Print $T$ lines.<br>
The $i$-th line should contain the answer to $\rm case_i$.<br>
If there exists a time such that Takahashi can get off the train at Town $B$, the line should contain the earliest such time; otherwise, the line should contain `infinity`.

```input1
3
5 2 7 6
1 1 3 1
999999999 1 1000000000 1
```

```output1
20
infinity
1000000000999999999
```

Let $[a, b)$ denote the interval $a \leq t &lt; b$.

In the first case, the train stops at Town $B$ during $[5, 7), [19, 21), [33, 35), \dots$, and Takahashi is awake during $[7, 13), [20, 26), [33, 39), \dots$, so he can get off at time $20$ at the earliest.