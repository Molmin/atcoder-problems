Score : $150$ points

## Problem Statement

There is one humidifier in the AtCoder company office. The current time is $0$, and the humidifier has no water inside.

You will add water to this humidifier $N$ times. The $i$-th addition of water ($1 \leq i \leq N$) takes place at time $T_i$, and you add $V_i$ liters of water. It is guaranteed that $T_i &lt; T_{i+1}$ for all $1 \leq i \leq N-1$.

However, the humidifier has a leak, and as long as there is water inside, the amount of water decreases by $1$ liter per unit time.

Find the amount of water remaining in the humidifier immediately after you finish adding water at time $T_N$.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq T_i \leq 100$ ($1 \leq i \leq N$)
- $1 \leq V_i \leq 100$ ($1 \leq i \leq N$)
- $T_i &lt; T_{i+1}$ ($1 \leq i \leq N-1$)
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $T_1$ $V_1$
> 
> $T_2$ $V_2$
> 
> $\vdots$
> 
> $T_N$ $V_N$

## Output

Print the answer.

```input1
4
1 3
3 1
4 4
7 1
```

```output1
3
```

At each point in time, water is added as follows:

- Time $1$: Before adding, the humidifier has $0$ liters. After adding $3$ liters, it has $3$ liters.
- Time $3$: Before adding, it has $1$ liter. After adding $1$ liter, it has $2$ liters total.
- Time $4$: Before adding, it has $1$ liter. After adding $4$ liters, it has $5$ liters total.
- Time $7$: Before adding, it has $2$ liters. After adding $1$ liter, it has $3$ liters total.

After finishing the addition at time $7$, the humidifier contains $3$ liters. Thus, the answer is $3$.

```input2
3
1 8
10 11
21 5
```

```output2
5
```

```input3
10
2 1
22 10
26 17
29 2
45 20
47 32
72 12
75 1
81 31
97 7
```

```output3
57
```