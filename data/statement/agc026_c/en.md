Score : $600$ points

## Problem Statement

You are given a string $S$ of length $2N$ consisting of lowercase English letters.

There are $2^{2N}$ ways to color each character in $S$ red or blue. Among these ways, how many satisfy the following condition?

- The string obtained by reading the characters painted red **from left to right** is equal to the string obtained by reading the characters painted blue **from right to left**.

## Constraints

- $1 \leq N \leq 18$
- The length of $S$ is $2N$.
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the number of ways to paint the string that satisfy the condition.

```input1
4
cabaacba
```

```output1
4
```

There are four ways to paint the string, as follows:

- <span style="color:red">c</span><span style="color:blue">a</span><span style="color:blue">b</span><span style="color:blue">a</span><span style="color:red">a</span><span style="color:blue">c</span><span style="color:red">b</span><span style="color:red">a</span>
- <span style="color:red">c</span><span style="color:blue">a</span><span style="color:blue">b</span><span style="color:red">a</span><span style="color:blue">a</span><span style="color:blue">c</span><span style="color:red">b</span><span style="color:red">a</span>
- <span style="color:blue">c</span><span style="color:red">a</span><span style="color:red">b</span><span style="color:red">a</span><span style="color:blue">a</span><span style="color:red">c</span><span style="color:blue">b</span><span style="color:blue">a</span>
- <span style="color:blue">c</span><span style="color:red">a</span><span style="color:red">b</span><span style="color:blue">a</span><span style="color:red">a</span><span style="color:red">c</span><span style="color:blue">b</span><span style="color:blue">a</span>

```input2
11
mippiisssisssiipsspiim
```

```output2
504
```

```input3
4
abcdefgh
```

```output3
0
```

```input4
18
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

```output4
9075135300
```

The answer may not be representable as a $32$-bit integer.