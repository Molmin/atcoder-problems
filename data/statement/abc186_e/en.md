Score : $500$ points

## Problem Statement

We have $N$ chairs arranged in a circle, one of which is a throne.

Takahashi is initially sitting on the chair that is $S$ chairs away from the throne in the clockwise direction. Now, he will repeat the move below.

Move: Go to the chair that is $K$ chairs away from the chair he is currently sitting on in the clockwise direction.

After how many moves will he be sitting on the throne for the first time? If he is never going to sit on it, report `-1` instead.

You are asked to solve $T$ test cases.

## Constraints

- $1\leq T \leq 100$
- $2\leq N \leq 10^9$
- $1\leq S &lt; N$
- $1\leq K \leq 10^9$

## Input

Input is given from Standard Input in the following format. The first line is in the format below:

> $T$

Then, the following $T$ lines represent $T$ test cases. Each of these lines is in the format below:

> $N$ $S$ $K$

## Output

For each test case, print the answer in its own line.

```input1
4
10 4 3
1000 11 2
998244353 897581057 595591169
10000 6 14
```

```output1
2
-1
249561088
3571
```

In the first test case, we have $10$ chairs, and Takahashi is initially sitting on the chair that is $4$ chairs away from the throne in the clockwise direction.
He will be sitting on the throne after $2$ moves of moving $3$ chairs in the clockwise direction.

In the second test case, he will never sit on the throne, so we should print `-1`.