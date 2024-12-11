Score : $500$ points

## Problem Statement

You are given a sequence $(P_1,P_2,...,P_N)$ which is a permutation of the integers from $1$ through $N$.
You would like to sort this sequence in ascending order by repeating the following operation:

- Choose an element in the sequence and move it to the beginning or the end of the sequence.

Find the minimum number of operations required.
It can be proved that it is actually possible to sort the sequence using this operation.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $(P_1,P_2,...,P_N)$ is a permutation of  $(1,2,...,N)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$
> 
> $:$
> 
> $P_N$

## Output

Print the minimum number of operations required.

```input1
4
1
3
2
4
```

```output1
2
```

For example, the sequence can be sorted in ascending order as follows:

- Move $2$ to the beginning. The sequence is now $(2,1,3,4)$.
- Move $1$ to the beginning. The sequence is now $(1,2,3,4)$.

```input2
6
3
2
5
1
4
6
```

```output2
4
```

```input3
8
6
3
1
2
7
4
8
5
```

```output3
5
```