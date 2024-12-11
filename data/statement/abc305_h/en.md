Score : $650$ points

## Problem Statement

You have decided to **practice**. Practice means solving a large number of problems in AtCoder.<br>
Practice takes place over several days. The practice for one day is carried out in the following steps.

- Let $M$ be the number of problems to be solved on that day. Each problem has a value called **difficulty**, which is a pair of non-negative integers $(A, B)$.
- First, rearrange the $M$ problems in any order. Then, solve the problems one by one in that order.
- You have a value called **fatigue**. The fatigue at the beginning of the day is $0$, and it changes from $x$ to $Ax + B$ when solving a problem with difficulty $(A, B)$.
- The fatigue at the end of solving all $M$ problems is called the **energy consumed** for that day.

There is a sequence of $N$ problems in AtCoder, called problem $1$, problem $2$, $\dots$, problem $N$ in order. The difficulty of problem $i$ is $(A_i, B_i)$.<br>
You have decided to solve all $N$ problems through practice.<br>
Practice is carried out in the following steps. Below, let $[L, R]$ denote the following sequence of problems: problem $L$, problem $L+1$, $...$, problem $R$.

- Choose an integer $K$ freely between $1$ and $N$, inclusive. The practice will last $K$ days.
- Divide the sequence of $N$ problems into $K$ non-empty continuous subsequences, and let $S_i$ be the $i$-th sequence.  <br>
    Formally, choose a strictly increasing non-negative integer sequence $x_0, x_1, \dots, x_K$ such that $1 = x_0$ and $x_K = N + 1$, and let $S_i = [x_{i-1}, x_i - 1]$ for $1 \leq i \leq K$.
- Then, for $i=1, 2, \dots, K$, solve all problems in $S_i$ on the $i$-th day of practice.

You have decided to practice so that the total energy consumed throughout the practice is at most $X$.<br>
Let $D$ be the minimum possible value of $K$, the number of days, for such a practice. (Here, it is guaranteed that $\sum_{i = 1}^N B_i \leq X$. Under this constraint, such $D$ always exists.)<br>
Also, let $M$ be the minimum possible total energy consumed throughout a practice such that $K=D$.  

Find $D$ and $M$.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq X \leq 10^8$
- $1 \leq A_i \leq 10^5$
- $1 \leq B_i$
- $\sum_{i=1}^N B_i \leq X$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print $D$ and $M$ separated by a space.

```input1
3 100
2 2
3 4
5 7
```

```output1
1 52
```

In this test case, you can solve all problems in one day while satisfying the condition for $X$.<br>
By following the steps below, the total energy consumed during the practice will be $52$, which is the minimum.

- Set $K=1$ and solve $[1, 3]$ on the first day.
- Carry out the practice on the first day in the following steps.-   - Arrange the problems in the order (problem $3$, problem $2$, problem $1$).
-   - Initially, the fatigue is $0$.
-   - Solve problem $3$. The fatigue changes to $5 \times 0 + 7 = 7$.
-   - Solve problem $2$. The fatigue changes to $3 \times 7 + 4 = 25$.
-   - Solve problem $1$. The fatigue changes to $2 \times 25 + 2 = 52$.
-   - The fatigue at the end of solving all problems is $52$. Therefore, the energy consumed on this day is $52$.
- The total energy consumed throughout the practice is also $52$.

```input2
3 30
2 2
3 4
5 7
```

```output2
2 17
```

This test case is obtained by changing $X$ from $100$ to $30$ in the first test case. Therefore, it is impossible to solve all problems in one day while satisfying the condition for $X$.

By following the steps below, you can achieve $M=17$ by practicing for two days.

- Set $K = 2$, and solve $[1, 2]$ on the first day and $[3, 3]$ on the second day.
- Carry out the practice on the first day in the following steps.-   - Arrange the problems in the order (problem $1$, problem $2$).
-   - Initially, the fatigue is $0$.
-   - Solve problem $1$. The fatigue changes to $2 \times 0 + 2 = 2$.
-   - Solve problem $2$. The fatigue changes to $3 \times 2 + 4 = 10$.
-   - The fatigue at the end of solving all problems is $10$. Therefore, the energy consumed on the first day is $10$.
- Carry out the practice on the second day in the following steps.-   - Arrange the problems in the order (problem $3$).
-   - Initially, the fatigue is $0$.
-   - Solve problem $3$. The fatigue changes to $5 \times 0 + 7 = 7$.
-   - The fatigue at the end of solving all problems is $7$. Therefore, the energy consumed on the second day is $7$.
- The total energy consumed throughout the practice is $10 + 7 = 17$.

```input3
5 50000000
100000 10000000
100000 10000000
100000 10000000
100000 10000000
100000 10000000
```

```output3
5 50000000
```

The optimal practice is to solve one problem per day.

```input4
10 100000000
5 88
66 4
52 1
3 1
12 1
53 25
11 12
12 2
1 20
47 10
```

```output4
2 73647
```

```input5
15 100000000
2387 3178
2369 5772
1 29
36 3
52 2981
196 1
36 704
3 3
1501 5185
23 628
3623 810
80 101
6579 15
681 7
183 125
```

```output5
4 54468135
```