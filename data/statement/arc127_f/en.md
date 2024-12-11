Score : $1000$ points

## Problem Statement

Given are integers $A$, $B$, $V$, and $M$, where $A$ and $B$ are guaranteed to be coprime.
Additionally, you have an integer $x$.
Initially, $x=V$.

You can do the following four kinds of operations any number of times in any order.

- <p>Replace the value of $x$ with $x+A$.</p>
- <p>Replace the value of $x$ with $x-A$.</p>
- <p>Replace the value of $x$ with $x+B$.</p>
- <p>Replace the value of $x$ with $x-B$.</p>

Here, $0 \leq x \leq M$ must hold at any moment during this process.

Under this condition, find how many different values $x$ can take.

For each input file, solve $T$ test cases.

## Constraints

- $1 \leq T \leq 10^5$
- $1 \leq A &lt; B \leq M \leq 10^9$
- $A$ and $B$ are coprime.
- $0 \leq V \leq M$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_3$

Each case is in the following format:

> $A$ $B$ $V$ $M$

## Output

Print the answer for each case.

```input1
5
3 5 0 5
1 2 5 10
5 8 4 9
10 99 48 106
500000000 500000001 123456789 900000000
```

```output1
4
11
4
10
800000002
```

In the first case, $x$ can take four values: $x=0,2,3,5$.