Score : $1000$ points

## Problem Statement

   #nck {
      width: 30px;
      height: auto;
   }

There are $N$ balls and $N+1$ holes in a line. Balls are numbered $1$ through $N$ from left to right. Holes are numbered $1$ through $N+1$ from left to right. The $i$-th ball is located between the $i$-th hole and $(i+1)$-th hole. We denote the distance between neighboring items (one ball and one hole) from left to right as $d_i$ ($1 \leq i \leq 2 \times N$). You are given two parameters $d_1$ and $x$. $d_i - d_{i-1}$ is equal to $x$ for all $i$ ($2 \leq i \leq 2 \times N$).

We want to push all $N$ balls into holes one by one. When a ball rolls over a hole, the ball will drop into the hole if there is no ball in the hole yet. Otherwise, the ball will pass this hole and continue to roll. (In any scenario considered in this problem, balls will never collide.)

In each step, we will choose one of the remaining balls uniformly at random and then choose a direction (either left or right) uniformly at random and push the ball in this direction. Please calculate the expected total distance rolled by all balls during this process.

For example, when $N = 3$, $d_1 = 1$, and $x = 1$, the following is one possible scenario:

![c9264131788434ac062635a675a785e3.jpg](https://atcoder.jp/img/agc007/c9264131788434ac062635a675a785e3.jpg)

- first step: push the ball numbered $2$ to its left, it will drop into the hole numbered $2$. The distance rolled is $3$.
- second step: push the ball numbered $1$ to its right, it will pass the hole numbered $2$ and drop into the hole numbered $3$. The distance rolled is $9$.
- third step: push the ball numbered $3$ to its right, it will drop into the hole numbered $4$. The distance rolled is $6$.

So the total distance in this scenario is $18$.

Note that in all scenarios every ball will drop into some hole and there will be a hole containing no ball in the end.

## Constraints

- $1 \leq N \leq 200,000$
- $1 \leq d_1 \leq 100$
- $0 \leq x \leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $d_1$ $x$

## Output

Print a floating number denoting the answer. The relative or absolute error of your answer should not be higher than $10^{-9}$.

```input1
1 3 3
```

```output1
4.500000000000000
```

The distance between the only ball and the left hole is $3$ and distance between the only ball and the right hole is $6$. There are only two scenarios (i.e. push left and push right). The only ball will roll $3$ and $6$ unit distance, respectively. So the answer for this example is $(3+6)/2 = 4.5$.

```input2
2 1 0
```

```output2
2.500000000000000
```

```input3
1000 100 100
```

```output3
649620280.957660079002380
```