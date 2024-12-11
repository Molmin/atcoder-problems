Score : $300$ points

## Problem Statement

For an integer $x$ not less than $0$, we define $g_1(x), g_2(x), f(x)$ as follows:

- $g_1(x)=$ the integer obtained by rearranging the digits in the decimal notation of $x$ in descending order
- $g_2(x)=$ the integer obtained by rearranging the digits in the decimal notation of $x$ in ascending order
- $f(x)=g_1(x)-g_2(x)$

For example, we have $g_1(314)=431$, $g_2(3021)=123$, $f(271)=721-127=594$. Note that the leading zeros are ignored.

Given integers $N, K$, find $a_K$ in the sequence defined by $a_0=N$, $a_{i+1}=f(a_i)\ (i\geq 0)$.

## Constraints

- $0 \leq N \leq 10^9$
- $0 \leq K \leq 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print $a_K$.

```input1
314 2
```

```output1
693
```

We have:

- $a_0=314$
- $a_1=f(314)=431-134=297$
- $a_2=f(297)=972-279=693$

```input2
1000000000 100
```

```output2
0
```

We have:

- $a_0=1000000000$
- $a_1=f(1000000000)=1000000000-1=999999999$
- $a_2=f(999999999)=999999999-999999999=0$
- $a_3=f(0)=0-0=0$
- $\vdots$

```input3
6174 100000
```

```output3
6174
```