---
title: "Ceph Architecture: Understanding Decentralization Through Object Placement"
description: "A study of the responsibility boundaries among RADOS, CRUSH, OSDs, and upper-layer interfaces."
published: 2026-05-26
category: "Storage Systems"
lang: en
tags: ["Ceph", "RADOS", "CRUSH", "Distributed Systems"]
---

The key to understanding Ceph is not memorizing every daemon. It is understanding how an object finds its storage location and why the system can still locate it after the cluster changes.

## RADOS as the shared foundation

RBD, CephFS, and RGW expose different data models, but all are built on RADOS. This layering lets block, file, and object interfaces share replication, recovery, and cluster-management mechanisms.

## CRUSH handles placement

Traditional systems may depend on a central metadata table that records every object's location. Ceph uses CRUSH to calculate placement from the object and cluster topology. A client does not need a central lookup for every I/O, so the data path can go directly to an OSD.

A Placement Group sits between objects and OSDs. Objects map to PGs, then CRUSH places each PG on a set of OSDs. The number of PGs affects distribution, recovery granularity, and management overhead; it is more than a tuning parameter.

## The control plane still matters

A decentralized data path does not mean coordination disappears. Monitors maintain cluster maps and the agreed cluster state, while Managers provide additional monitoring and management functions. Separating data and control paths makes failure impact easier to reason about.

Three questions are useful when learning a distributed storage system: who decides placement, who holds authoritative state, and who drives recovery after failure? Ceph's components are organized around these responsibilities.
