Score : $600$ points

## Problem Statement

We have a grid with $N$ horizontal rows and $N$ vertical columns.<br>
Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left. A character $c_{i,j}$ describes the color of $(i, j)$.<br>
`B` means the square is painted black; `W` means the square is painted white; `?` means the square is not yet painted.

Takahashi will complete the black-and-white grid by painting each unpainted square black or white.<br>
Let the **zebraness** of the grid be the number of pairs of a black square and a white square sharing a side.<br>
Find the maximum possible zebraness of the grid that Takahashi can achieve.

## Constraints

- $1 \leq N \leq 100$
- $c_{i, j}$ is `B`, `W`, or `?`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $c_{1,1} \dots c_{1,N}$
> 
> $\hspace{20pt}\vdots$
> 
> $c_{N,1} \dots c_{N,N}$

## Output

Print the answer.

```input1
2
BB
BW
```

```output1
2
```

We have two pairs of a black square and a white square sharing a side: $(1, 2), (2, 2)$ and $(2, 1), (2, 2)$, so the zebraness of this grid is $2$.

```input2
3
BBB
BBB
W?W
```

```output2
4
```

Painting $(3, 2)$ white makes the zebraness $3$, and painting it black makes the zebraness $4$.

```input3
5
?????
?????
?????
?????
?????
```

```output3
40
```