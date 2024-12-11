Score : $650$ points

## Problem Statement

You are given a sequence $P=(P_1,P_2,\dots,P_N)$ of length $N$. Takahashi and Aoki will play a game using the sequence $P$.

First, Takahashi will choose $K$ distinct integers $x_1,x_2,\dots,x_K$ from $1,2,\dots,N$.

Next, Aoki will choose an integer $y$ from $1,2,\dots,N$ with a probability proportional to $P_y$. That is, the probability that integer $y$ is chosen is $\dfrac{P_y}{\sum_{y'=1}^N P_{y'}}$. Then, Aoki's score will be $\displaystyle \min_{i=1,2,\dots,K} |x_i-y|$.

Takahashi wants to **minimize** the expected value of Aoki's score. Find the expected value of Aoki's score when Takahashi chooses $x_1,x_2,\dots,x_K$ so that this value is minimized, multiplied by $\sum_{y'=1}^N P_{y'}$. It is guaranteed that the value to be printed is an integer.

## Constraints

- $1 \leq N \leq 5 \times 10^4$
- $1 \leq K \leq N$
- $0 \leq P_i \leq 10^5$
- $1 \leq \sum_{y'=1}^N P_{y'} \leq 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## Output

Print the answer.

```input1
5 2
1 1 1 1 1
```

```output1
3
```

The probabilities of Aoki choosing $1,2,\dots,N$ are all equal: $\frac{1}{5}$.

If Takahashi chooses $x_1=2$ and $x_2=4$, then the expected value of Aoki's score will be $1 \times \frac{1}{5} + 0 \times \frac{1}{5} + 1 \times \frac{1}{5} + 0 \times \frac{1}{5} + 1 \times \frac{1}{5} = \frac{3}{5}$.

If Takahashi chooses $x_1=2$ and $x_2=3$, then the expected value of Aoki's score will be $1 \times \frac{1}{5} + 0 \times \frac{1}{5} + 0 \times \frac{1}{5} + 1 \times \frac{1}{5} + 2 \times \frac{1}{5} = \frac{4}{5}$.

No matter how Takahashi chooses, the expected value of Aoki's score cannot be smaller than $\frac{3}{5}$. Therefore, the minimum value is $\frac{3}{5}$, so print this value multiplied by $5$, which is $3$.

```input2
5 1
0 0 1 0 0
```

```output2
0
```

```input3
1 1
100
```

```output3
0
```

```input4
20 7
4262 9522 2426 3823 7364 964 2743 2423 1955 5274 3684 847 363 35 278 3220 203 2904 6304 1928
```

```output4
22809
```