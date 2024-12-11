Score : $400$ points

## Problem Statement

You are given positive integers $A$ and $B$.

You will repeat the following operation until $A=B$:

- compare $A$ and $B$ to perform one of the following two:-   - if $A &amp;gt; B$, replace $A$ with $A-B$;
-   - if $A &amp;lt; B$, replace $B$ with $B-A$.

How many times will you repeat it until $A=B$?  It is guaranteed that a finite repetition makes $A=B$.

## Constraints

- $1 \le A,B \le 10^{18}$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the answer.

```input1
3 8
```

```output1
4
```

Initially, $A=3$ and $B=8$.  You repeat the operation as follows:

- $A&lt;B$, so replace $B$ with $B-A=5$, making $A=3$ and $B=5$.
- $A&lt;B$, so replace $B$ with $B-A=2$, making $A=3$ and $B=2$.
- $A &gt; B$, so replace $A$ with $A-B=1$, making $A=1$ and $B=2$.
- $A&lt;B$, so replace $B$ with $B-A=1$, making $A=1$ and $B=1$.

Thus, you repeat it four times.

```input2
1234567890 1234567890
```

```output2
0
```

Note that the input may not fit into a 32-bit integer type.

```input3
1597 987
```

```output3
15
```