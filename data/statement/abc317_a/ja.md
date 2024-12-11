配点 : $100$ 点

## 問題文

ナオヒロ君はモンスターを飼っています。モンスターの現在の体力は $H$ です。<br>
また、ナオヒロ君は $N$ 種類の傷薬を持っています。傷薬は効き目の弱い順に $1$ から $N$ までの番号がついています。<br>
傷薬 $n$ をモンスターに与えると、モンスターの体力が $P_n$ 増加します。ここで、$P_1 \lt P_2 \lt \dots \lt P_N$ が成り立ちます。

ナオヒロ君は傷薬を $1$ つモンスターに与えることで、モンスターの体力を $X$ 以上にしたいです。<br>
目標を達成できる傷薬のうち最も効き目の弱いものの番号を出力してください。(制約下においてそのような傷薬が存在することが保証されています。)

## 制約

- $2 \leq N \leq 100$
- $1 \leq H \lt X \leq 999$
- $1 \leq P_1 \lt P_2 \lt \dots \lt P_N = 999$
- 入力される値はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$ $H$ $X$
> 
> $P_1$ $P_2$ $\dots$ $P_N$

## 出力

目標を達成できる傷薬のうち最も効き目の弱いものの番号を出力せよ。

```input1
3 100 200
50 200 999
```

```output1
2
```

それぞれの傷薬をモンスターに 1 つ与えたときのモンスターの体力の変化は以下の通りです。

- 傷薬 $1$ をモンスターに与えるとモンスターの体力は $100 + 50 = 150$ になります。
- 傷薬 $2$ をモンスターに与えるとモンスターの体力は $100 + 200 = 300$ になります。
- 傷薬 $3$ をモンスターに与えるとモンスターの体力は $100 + 999 = 1099$ になります。

与えた後に体力が $X = 200$ 以上になっている傷薬は、傷薬 $2$ と傷薬 $3$ です。このうち最も効き目の弱い傷薬である傷薬 $2$ が答えになります。

```input2
2 10 21
10 999
```

```output2
2
```

```input3
10 500 999
38 420 490 585 613 614 760 926 945 999
```

```output3
4
```