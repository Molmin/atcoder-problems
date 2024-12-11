Score : $800$ points

## Problem Statement

There are robots on a number line.
Specifically, for each $i=0,1,2,\cdots,10^{100}$, there is exactly one robot called Robot $i$ at coordinate $i$.

We have many balls.
Each of the balls has a positive integer written on it.
Integer sequences $A$ and $B$, each of length $N$, describe these balls.
Specifically, for each $i$ ($1 \leq i \leq N$), there are $B_i$ balls with $A_i$ written on them.

Now, Snuke will do the following sequence of operations:

- <p>Step 1: Choose zero or more balls and replace the integers written on those balls with **positive integers** of his choice between $1$ and $10^{100}$ (inclusive). (The new integers can be chosen independently from each other.)</p>
- <p>Step 2: Eat the balls one by one in any order of his choice. Each time he eats a ball, he should do the following:</p>
-   - Let $v$ be the integer written on the ball he has just eaten. If Robot $v$ exists, move it so that its coordinate decreases by $1$. Here, if there is another robot at the destination, that robot (not Robot $v$) will be destroyed.

Snuke wants to eat all the balls without destroying Robot $0$.
Find the minimum number of balls Snuke must choose in Step 1 to achieve his objective.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_1 &lt; A_2 &lt; \ldots &lt; A_N \leq 10^9$
- $1 \leq B_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$

## Output

Print the answer.

```input1
3
1 2 3
1 2 1
```

```output1
1
```

We can achieve the objective by choosing one ball with $2$ written on it, rewriting $3$ on it, and then eating the balls in the following order:

- <p>Eat the ball with $2$ written on it, moving Robot $2$ from coordinate $2$ to coordinate $1$ and destroying Robot $1$.</p>
- <p>Eat the ball with $3$ written on it, moving Robot $3$ from coordinate $3$ to coordinate $2$.</p>
- <p>Eat the ball with $3$ written on it, moving Robot $3$ from coordinate $2$ to coordinate $1$ and destroying Robot $2$.</p>
- <p>Eat the ball with $1$ written on it. Robot $1$ is already destroyed, so nothing happens.</p>

```input2
4
1 3 5 7
3 1 4 1
```

```output2
0
```