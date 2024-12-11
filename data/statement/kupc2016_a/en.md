Score : $66$ points

## Problem Statement

  Summer vacation ended at last and the second semester has begun.
  You, a Kyoto University student, came to university and heard a rumor that somebody will barricade the entrance of your classroom.
  The barricade will be built just before the start of the $A$-th class and removed by Kyoto University students just before the start of the $B$-th class.
  All the classes conducted when the barricade is blocking the entrance will be cancelled and you will not be able to attend them.
  Today you take $N$ classes and class $i$ is conducted in the $t_i$-th period.
  You take at most one class in each period.
  Find the number of classes you can attend.

## Constraints

- $1 \leq N \leq 1000$
- $1 \leq A &lt; B \leq 10^9$
- $1 \leq t_i \leq 10^9$
- All $t_i$ values are distinct.

## Input

$N$, $A$ and $B$ are given on the first line and $t_i$ is given on the $(i+1)$-th line. 

> $N$ $A$ $B$
> 
> $t1$
> 
> :
> 
> $tN$

## Output

Print the number of classes you can attend. 

```input1
5 5 9
4
3
6
9
1
```

```output1
4
```

You can not only attend the third class. 

```input2
5 4 9
5
6
7
8
9
```

```output2
1
```

You can only attend the fifth class. 

```input3
4 3 6
9
6
8
1
```

```output3
4
```

You can attend all the classes. 

```input4
2 1 2
1
2
```

```output4
1
```

You can not attend the first class, but can attend the second.