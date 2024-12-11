Score : $2400$ points

## Problem Statement

You have two sandglasses: a sandglass that can measure $1$ second, and a sandglass that can measure $\sqrt{2}$ seconds.
Is it possible to measure $x + y \sqrt{2}$ seconds using them?

Let's formalize the statement.
We have two sandglasses named $A$ and $B$.
Each sandglass has two bulbs, and the bulbs may contain sand.
We can place each sandglass in one of the three states:
two vertical states (one of the bulbs is placed on top of the other, and in case the top bulb contains sand, the sand in the top bulb keeps falling into the bottom bulb at the speed of one gram per second.) and
one horizontal state (the sand does not move.)

The sandglass A contains $1$ gram of sand and the sandglass B contains $\sqrt{2}$ grams of sand. Thus, when sandglass $A$ is vertically placed and all sand is in the top bulb, it takes $1$ second until all sand falls into the bottom bulb.
Similarly, this time is $\sqrt{2}$ seconds for sandglass $B$.

Initially, both $A$ and $B$ are vertically placed, and all sand is in the bottom bulb.
You are not allowed to touch anything before Snuke shouts.
When an *event* (described below) happens exactly $t$ seconds after Snuke shouts, we say that we can measure $t$ seconds.

We say that an *event* happens when one of the following happens:

- Snuke shouts.
- The sand in a sandglass in a vertical state has just stopped falling down.

When an *event* happens, we can perform (an arbitrary number of) the following operation in negligible time:

- Choose a sandglasses, and change its state.

For example, we can measure $-1 + 2 \sqrt{2}$ seconds as follows:

- At time $0$, Snuke shouts. Turn both $A$ and $B$ upside down.
- At time $1$, an event happens: the sand in $A$ stops falling down. Turn $A$ upside down again (and leave $B$ as it is).
- At time $\sqrt{2}$, an event happens: the sand in $B$ stops falling down. Turn $A$ upside down again, and leave $B$ in the horizontal state.
- At time $-1 + 2 \sqrt{2}$, an event happens: the sand in $A$ stops falling down.

You are given $Q$ numbers of the form $x_i + y_i \sqrt{2}$.
Solve the problem above for each given number.

## Constraints

- $1 \leq Q \leq 10^5$
- $-10^9 \leq x_i, y_i \leq 10^9$
- $x_i + y_i \sqrt{2} &gt; 0$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $Q$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_Q$ $y_Q$

## Output

Print $Q$ lines.
On the $i$-th line, print `Yes` if it is possible to measure $x_i + y_i \sqrt{2}$ seconds; otherwise print `No`.

```input1
3
-1 2
2020 1227
2 -1
```

```output1
Yes
Yes
No
```