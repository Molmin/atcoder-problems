Score : $700$ points

## Problem Statement

Aoki is playing with a sequence of numbers $a_{1}, a_{2}, ..., a_{N}$. Every second, he performs the following operation :

- Choose a positive integer $k$. For each element of the sequence $v$, Aoki may choose to replace $v$ with its remainder when divided by $k$, or do nothing with $v$. The cost of this operation is $2^{k}$ (regardless of how many elements he changes).

Aoki wants to turn the sequence into $b_{1}, b_{2}, ..., b_{N}$ (the order of the elements is important). Determine if it is possible for Aoki to perform this task and if yes, find the minimum cost required.

## Constraints

- $1 \leq N \leq 50$
- $0 \leq a_{i}, b_{i} \leq 50$
- All values in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1}$ $a_{2}$ $...$ $a_{N}$
> 
> $b_{1}$ $b_{2}$ $...$ $b_{N}$

## Output

Print the minimum cost required to turn the original sequence into $b_{1}, b_{2}, ..., b_{N}$. If the task is impossible, output $-1$ instead.

```input1
3
19 10 14
0 3 4
```

```output1
160
```

Here's a possible sequence of operations :

- <p>Choose $k = 7$. Replace $19$ with $5$, $10$ with $3$ and do nothing to $14$. The sequence is now $5, 3, 14$.</p>
- <p>Choose $k = 5$. Replace $5$ with $0$, do nothing to $3$ and replace $14$ with $4$. The sequence is now $0, 3, 4$.</p>

The total cost is $2^{7} + 2^{5} = 160$.

```input2
3
19 15 14
0 0 0
```

```output2
2
```

Aoki can just choose $k = 1$ and turn everything into $0$. The cost is $2^{1} = 2$.

```input3
2
8 13
5 13
```

```output3
-1
```

The task is impossible because we can never turn $8$ into $5$ using the given operation.

```input4
4
2 0 1 8
2 0 1 8
```

```output4
0
```

Aoki doesn't need to do anything here. The cost is $0$.

```input5
1
50
13
```

```output5
137438953472
```

Beware of overflow issues.