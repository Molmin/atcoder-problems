Score: $300$ points

## Problem Statement

There is a single integer $N$ written on a blackboard.<br>
Takahashi will repeat the following series of operations until all integers not less than $2$ are removed from the blackboard:

- Choose one integer $x$ not less than $2$ written on the blackboard.
- Erase one occurrence of $x$ from the blackboard. Then, write two new integers $\left \lfloor \dfrac{x}{2} \right\rfloor$ and $\left\lceil \dfrac{x}{2} \right\rceil$ on the blackboard.
- Takahashi must pay $x$ yen to perform this series of operations.

Here, $\lfloor a \rfloor$ denotes the largest integer not greater than $a$, and $\lceil a \rceil$ denotes the smallest integer not less than $a$.

What is the total amount of money Takahashi will have paid when no more operations can be performed?<br>
It can be proved that the total amount he will pay is constant regardless of the order in which the operations are performed.

## Constraints

- $2 \leq N \leq 10^{17}$

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the total amount of money Takahashi will have paid, in yen.

```input1
3
```

```output1
5
```

Here is an example of how Takahashi performs the operations:

- Initially, there is one $3$ written on the blackboard.
- He chooses $3$. He pays $3$ yen, erases one $3$ from the blackboard, and writes $\left \lfloor \dfrac{3}{2} \right\rfloor = 1$ and $\left\lceil \dfrac{3}{2} \right\rceil = 2$ on the blackboard.
- There is one $2$ and one $1$ written on the blackboard.
- He chooses $2$. He pays $2$ yen, erases one $2$ from the blackboard, and writes $\left \lfloor \dfrac{2}{2} \right\rfloor = 1$ and $\left\lceil \dfrac{2}{2} \right\rceil = 1$ on the blackboard.
- There are three $1$s written on the blackboard.
- Since all integers not less than $2$ have been removed from the blackboard, the process is finished.

Takahashi has paid a total of $3 + 2 = 5$ yen for the entire process, so print $5$.

```input2
340
```

```output2
2888
```

```input3
100000000000000000
```

```output3
5655884811924144128
```