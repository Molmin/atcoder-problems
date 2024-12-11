配点 : $500$ 点

## 問題文

高橋くんと青木くんは $n$ 頂点の根付き木を使ったゲームをします。
木の頂点には $1$ から $n$ の整数がふられています。
この木の根は頂点 $1$ であり、$v=2,\dots,n$ について、頂点 $v$ の親は $p_v$ です。
最初、各頂点にコインが $1$ 枚ずつ置かれています。また、頂点 $1$ にコマが置かれています。

高橋くんと青木くんは、高橋くんから始めて交互に、以下の操作を行います。

- コマの置かれている頂点にコインがある場合、そのコインを獲得し、手番を終える。
- コマの置かれている頂点にコインがない場合、以下のルールでコマを動かす (またはゲームを終える)。-   - コマが置かれている頂点の子のうち、コインが置かれている頂点が存在するときは、そのうちのいずれかの頂点を選んでその頂点にコマを動かし、手番を終える。
-   - 存在しない場合、コマが置かれている頂点が根ならゲームを終える。そうでないとき、コマが置かれている頂点の親にコマを動かし、手番を終える。

高橋くんも青木くんも、自分が獲得するコインの枚数を最大にするために最適な行動をします。高橋くんが獲得するコインの枚数を求めてください。

## 制約

- $2\le n \le 10^5$
- $1\le p_v \lt v$

## 入力

入力は以下の形式で標準入力から与えられる。

> $n$
> 
> $p_2$ $\dots$ $p_n$

## 出力

両者が最適な行動をしたときに、高橋くんが獲得するコインの枚数を出力せよ。

```input1
10
1 2 3 4 5 6 7 8 9
```

```output1
10
```

どちらのプレイヤーにも選択肢が与えられず、必ず以下のようにゲームが進むため、高橋くんがすべてのコインを獲得します。

- 高橋くんが頂点 $1$ に置かれたコインを獲得する。
- 青木くんがコマを頂点 $2$ に動かす。
- 高橋くんが頂点 $2$ に置かれたコインを獲得する。
- 青木くんがコマを頂点 $3$ に動かす。
- $\vdots$
- 高橋くんが頂点 $10$ に置かれたコインを獲得する。
- 青木くんがコマを頂点 $9$ に動かす。
- 高橋くんがコマを頂点 $8$ に動かす。
- 青木くんがコマを頂点 $7$ に動かす。
- $\vdots$
- 高橋くんがコマを頂点 $2$ に動かす。
- 青木くんがコマを頂点 $1$ に動かす。
- ゲームを終える。

```input2
5
1 2 3 1
```

```output2
2
```

まず、高橋くんが頂点 $1$ に置かれたコインを獲得します。
その後、青木くんは頂点 $2$ か頂点 $5$ のどちらかにコマを動かすことができます。
もし頂点 $2$ に動かした場合、青木くんは最終的に頂点 $5$ に置かれたコインのみを獲得します。
一方で、頂点 $5$ に動かした場合、青木くんは最終的に頂点 $2,3,4$ に置かれたコインを獲得します。
青木くんは自分が獲得するコインの枚数を最大にするために最適な行動をするため、コマを頂点 $5$ に動かすことを選びます。
よって、高橋くんが獲得するコインは $2$ 枚です。

```input3
10
1 1 3 1 3 6 7 6 6
```

```output3
5
```