Score : $350$ points

## Problem Statement

You are given a string $S$ of length $N$. You are also given $Q$ queries, which you should process in order.

The $i$-th query is as follows:

- Given an integer $X_i$ and a character $C_i$, replace the $X_i$-th character of $S$ with $C_i$. Then, print the number of times the string `ABC` appears as a substring in $S$.

Here, a **substring** of $S$ is a string obtained by deleting zero or more characters from the beginning and zero or more characters from the end of $S$.<br>
For example, `ab` is a substring of `abc`, but `ac` is not a substring of `abc`.  

## Constraints

- $3 \le N \le 2 \times 10^5$
- $1 \le Q \le 2 \times 10^5$
- $S$ is a string of length $N$ consisting of uppercase English letters.
- $1 \le X_i \le N$
- $C_i$ is an uppercase English letter.

## Input

The input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $S$
> 
> $X_1$ $C_1$
> 
> $X_2$ $C_2$
> 
> $\vdots$
> 
> $X_Q$ $C_Q$

## Output

Print $Q$ lines.
The $i$-th line $(1 \le i \le Q)$ should contain the answer to the $i$-th query.

```input1
7 4
ABCDABC
4 B
3 A
5 C
4 G
```

```output1
2
1
1
0
```

After processing each query, $S$ becomes as follows.

- After the first query: $S=$ `ABCBABC`. In this string, `ABC` appears twice as a substring.
- After the second query: $S=$ `ABABABC`. In this string, `ABC` appears once as a substring.
- After the third query: $S=$ `ABABCBC`. In this string, `ABC` appears once as a substring.
- After the fourth query: $S=$ `ABAGCBC`. In this string, `ABC` appears zero times as a substring.

```input2
3 3
ABC
1 A
2 B
3 C
```

```output2
1
1
1
```

There are cases where $S$ does not change through processing a query.

```input3
15 10
BBCCBCACCBACACA
9 C
11 B
5 B
11 B
4 A
8 C
8 B
5 B
7 B
14 B
```

```output3
0
0
0
0
1
1
2
2
1
1
```